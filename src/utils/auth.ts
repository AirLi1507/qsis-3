export async function refresh(): Promise<boolean> {
  const request = await fetch("/api/v1/auth/refresh", {
    credentials: "include",
  });
  if (request.ok) {
    return await request.json();
  } else {
    return false;
  };
}


export async function login(uid: string, password: string): Promise<boolean> {
  const body = {
    uid: uid,
    password: password
  };
  const request = await fetch(
    "/api/v1/auth/login",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }
  );
  if (await request.json()) {
    return true;
  } else {
    return false;
  };
}

export async function logout(): Promise<boolean> {
  const request = await fetch(
    "/api/v1/auth/logout",
    {
      credentials: "include"
    }
  );
  if (request.ok) {
    return true;
  } else {
    return false;
  };
}
