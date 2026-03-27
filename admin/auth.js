// ================= CHECK LOGIN =================

async function checkAuth() {
  const { data, error } = await supabaseClient.auth.getSession();

  if (error) {
    console.error("Error sesión:", error);
    return;
  }

  if (!data.session) {
    window.location.href = "login.html";
  }
}

// ================= LOGOUT =================

async function logout() {
  await supabaseClient.auth.signOut();
  window.location.href = "login.html";
}