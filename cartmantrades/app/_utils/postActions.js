"use server";

import { cookies } from "next/headers";
import axios from "axios";
import { revalidatePath } from "next/cache";

export async function createPost(description) {
  const url = `${process.env.BACKEND_URL}/posts/createPost`;
  const token = cookies().get("jwt").value;

  try {
    const res = await axios.post(
      url,
      { description },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.ok) {
    }
  } catch (error) {
    return error.response.data.message;
  }
  revalidatePath("/community");
}

export async function getPosts() {
  const url = `${process.env.BACKEND_URL}/posts/getPosts`;
  const token = cookies().get("jwt")?.value;

  if (!token) return { error: "Log in to get permission on this content" };

  try {
    const res = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    revalidatePath("/community");
    return res.data.data;
  } catch (error) {
    return { error: error.response?.data.message || "Failded to fetch posts" };
  }
}

export async function updatePost(reaction, id) {
  const url = `${process.env.BACKEND_URL}/posts/updatePost/${id}`;
  const token = cookies().get("jwt").value;
  const updatePost = { reaction };

  try {
    const res = await axios.patch(url, updatePost, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
  revalidatePath("/community");
}

export async function addComment(comment, id) {
  const url = `${process.env.BACKEND_URL}/posts/addComment`;
  const token = cookies().get("jwt").value;
  const addComment = { comment, id };

  try {
    const res = await axios.post(url, addComment, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 200) {
      revalidatePath("/community");
    }
  } catch (error) {
    console.error("Error response:", error.response);
    console.error("Error stack:", error.stack);
    return error.response;
  }
}
