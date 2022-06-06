// Init Github
const github = new Github();

// Init UI
const ui = new UI();

// Search Input

const searchUser = document.getElementById("searchUser");

//Search input even listener
searchUser.addEventListener("keyup", (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {
    // Make HTTP call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not found") {
        // Show Alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
