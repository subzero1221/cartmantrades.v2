"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import axios from "axios";
import { revalidatePath } from "next/cache";

export async function registerUser(formData) {
  const url = `${process.env.BACKEND_URL}/signup`;
  const newUser = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    passwordConfirm: formData.get("passwordConfirm"),
  };

  try {
    const res = await axios.post(url, newUser);

    if (res.data && res.data.token) {
      cookies().set("jwt", res.data.token, {
        expires: new Date(Date.now() + 10 * 24000 * 60 * 60), // Cookie expires in 10 seconds
        httpOnly: true,
        sameSite: "Strict", // Ensure the cookie is sent only with same-site requests
      });
    }
  } catch (error) {
    return {
      error: error.response?.data?.message || "An unknown error occurred",
    };
  }
  redirect("/cryptos");
}

export async function getUserData() {
  try {
    const url = `${process.env.BACKEND_URL}/users/getUser`;
    const jwt = cookies().get("jwt")?.value;

    if (!jwt) {
      throw new Error("JWT token is missing");
    }

    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    if (res.status !== 200) {
      throw new Error("Failed to fetch user data");
    }
    return res.data.user;
  } catch (error) {
    // Extract error message from Axios error object
    return (
      error.response?.data?.message ||
      error.message ||
      "An unknown error occurred"
    );
  }
}

export async function logIn(formData) {
  const url = `${process.env.BACKEND_URL}/login`;
  const email = formData.get("email");
  const password = formData.get("password");
  const userCredentials = { email, password };

  try {
    const res = await axios.post(url, userCredentials);
    const cookieStore = cookies();

    if (res.status === 201) {
      ////
      cookieStore.set("jwt", res.data.token, {
        expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // Cookie expires in 10 days
        secure: true, // Ensures the cookie is only used with HTTPS
        sameSite: "Strict", // Ensure the cookie is sent only with same-site requests
      });
    }
  } catch (error) {
    return {
      error:
        error.response?.data?.message ||
        error.message ||
        "An unknown error occurred",
    };
  }
  redirect("/profile");
}

export async function logOut() {
  const url = `${process.env.BACKEND_URL}/logout`;

  try {
    const res = await axios.post(url);

    if (res.status === 200) {
      // Assuming the logout endpoint clears the session
      cookies().delete("jwt"); // Delete the cookie
      // Redirect to the home page
    }
  } catch (error) {
    console.error("Logout failed:", error); // Log error for debugging
  }
  redirect("/");
}

export async function updateMe(formData) {
  const url = `${process.env.BACKEND_URL}/users/updateMe`;
  const token = cookies().get("jwt").value;

  try {
    const res = await axios.patch(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
    });

    if (res.data) {
      revalidatePath("/profile");
    }
  } catch (error) {
    error.response?.data?.message ||
      error.message ||
      "An unknown error occurred, please chat support";
  }
}

export async function updatePhoto(formData) {
  const url = `${process.env.BACKEND_URL}/users/updatePhoto`;
  const token = cookies().get("jwt").value;

  const photo = formData.get("photo");

  try {
    const res = await axios.patch(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
    });

    if (res.data) {
      revalidatePath("/");
    }
  } catch (error) {
    console.error(
      error.response?.data?.message ||
        error.message ||
        "An unknown error occurred, please contact support"
    );
  }
}

export async function updatePassword(formData) {
  const url = `${process.env.BACKEND_URL}/users/updatePassword`;
  const token = cookies().get("jwt").value;
  const curPassword = formData.get("curPassword");
  const password = formData.get("password");
  const passwordConfirm = formData.get("passwordConfirm");
  const passwordUpdate = { curPassword, password, passwordConfirm };

  try {
    const res = await axios.patch(url, passwordUpdate, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.data && res.data.token) {
      cookies().set("jwt", res.data.token);
    }
  } catch (error) {
    // console.error(error.response.data.message);
    return {
      error: error.response?.data?.message || "An unknown error occurred",
    };
  }
}

export async function forgotPassword(formData) {
  const url = `${process.env.BACKEND_URL}/users/forgotPassword`;
  const email = formData.get("email");

  try {
    const res = await axios.post(url, { email });
    if (res.data) {
      return { success: res.data.status };
    } else {
      return { error: "An unknown error occurred, please chat support" };
    }
  } catch (error) {
    return {
      error:
        error.response?.data?.message ||
        error.message ||
        "An unknown error occurred, please chat support",
    };
  }
}

export async function resetPassword(formData, token) {
  const url = `${process.env.BACKEND_URL}/users/resetPassword/${token}`;
  const password = formData.get("password");
  const passwordConfirm = formData.get("passwordConfirm");
  const resetPass = { password, passwordConfirm };

  try {
    const res = await axios.patch(url, resetPass);
    if (res.data) {
      return { success: res.data.status };
    } else {
      return { error: "An unknown error occurred, please chat support" };
    }
  } catch (error) {
    return {
      error:
        error.response?.data?.message ||
        error.message ||
        "An unknown error occurred, please chat support",
    };
  }
}
