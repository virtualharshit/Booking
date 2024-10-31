let activeTabId = "categories";

// Function to initialize the default tab based on screen width
function initializeTabBasedOnWidth() {
  if (window.innerWidth <= 768) {
    activeTabId = "categories";
  } else {
    activeTabId = "team";
  }
  switchTab(activeTabId, null, true);
}

// Function to switch between tabs
function switchTab(tabId, button = null, isInitializing = false) {
  // Check screen width each time to reset default tab if needed
  if (!isInitializing && activeTabId === tabId) {
    initializeTabBasedOnWidth();
    return;
  }

  // Hide all tabs
  document.querySelectorAll(".tab-content").forEach(function (tab) {
    tab.style.display = "none";
  });

  // Remove active class from all buttons
  document.querySelectorAll(".tab-button").forEach((btn) => {
    btn.classList.remove("btnactive");
  });

  // Show the clicked tab
  document.getElementById(tabId).style.display = "block";
  if (button) button.classList.add("btnactive");

  // Set the active tab to the clicked one
  activeTabId = tabId;
}

// Run initialization on page load
window.onload = initializeTabBasedOnWidth;

// Function to change the header image and content
function changeHeader(imageSrc, name, rating, ratingnum, description, header) {
  const headers = document.querySelectorAll(".rounded-option");

  document.getElementById("header-image").src = imageSrc;
  document.getElementById("shop-name").textContent = name;
  document.getElementById("shop-rating").textContent = rating;
  document.getElementById("shop-rating-num").textContent = ratingnum;
  document.getElementById("shop-description").textContent = description;

  headers.forEach((header) => {
    header.classList.remove("headeractive");
  });

  header.classList.add("headeractive");
}

function showCategory(categoryId, button) {
  const categories = document.querySelectorAll(".category-list");
  const buttons = document.querySelectorAll(".category-button");

  categories.forEach((category) => {
    category.style.display = "none";
  });

  // Remove 'active' class from all buttons
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });

  document.getElementById(categoryId).style.display = "flex";

  // Add 'active' class to clicked button
  if (button) {
    button.classList.add("active");
  }
}

function showMobileCategory(categoryId, button) {
  const categories = document.querySelectorAll(".mobileccategory-list");
  const buttons = document.querySelectorAll(".mobilecategory-button");

  categories.forEach((category) => {
    category.style.display = "none";
  });

  // Remove 'active' class from all buttons
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });

  document.getElementById(categoryId).style.display = "flex";

  // Add 'active' class to clicked button
  if (button) {
    button.classList.add("active");
  }
}

function showNextModal(nextModalId) {
  // Hide all modals
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    modal.style.display = "none";
  });

  // Show the next modal
  const nextModal = document.getElementById(nextModalId);
  nextModal.style.display = "flex";
}

function closeAllModals() {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    modal.style.display = "none";
  });
}

// Show the first category by default
document.addEventListener("DOMContentLoaded", () => {
  const firstHeader = document.querySelector(".rounded-option");
  changeHeader(
    "header.jpg",
    "Frank's Barbershop",
    "★★★☆☆",
    "(10)",
    "Frank’s BarbershopFrank’s BarbershopFrank’s BarbershopFrank’s BarbershopFrank’s BarbershopFrank’s BarbershopFrank’s BarbershopFrank’s BarbershopFrank’s BarbershopFrank’s Barbershop",
    firstHeader
  );

  const firstButton = document.querySelector(".category-button");
  showCategory("category1", firstButton);

  const firstMobileButton = document.querySelector(".mobilecategory-button");
  showMobileCategory("mobilecategory1", firstMobileButton);
});

//-------------- Modal
// Get modal element and close button
const modal = document.getElementById("modal1");
const closeButton = document.querySelector(".close");
const backBtn = document.querySelector(".back-btn");

// Get all "Book" buttons
const bookButtons = document.querySelectorAll(".book-button");

// Add click event listener to all "Book" buttons
bookButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

// Close the modal when the close button (X) is clicked
closeButton.onclick = function () {
  modal.style.display = "none";
};
backBtn.onclick = function () {
  // modal.style.display = "none";
  closeAllModals();
};

// Close the modal when clicking outside the modal content
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// calender-------------------------------------------------
function formatDate(date) {
  const options = { month: "short", weekday: "short", day: "numeric" };
  const parts = new Intl.DateTimeFormat("en-US", options).formatToParts(date);
  return {
    month: parts.find((part) => part.type === "month").value,
    day: parts.find((part) => part.type === "weekday").value,
    date: parts.find((part) => part.type === "day").value,
  };
}

// Generate dates starting from today
// Calender 1

const today = new Date();
const datePicker = document.getElementById("date-picker");

for (let i = 0; i < 10; i++) {
  const currentDate = new Date(today);
  currentDate.setDate(today.getDate() + i);
  const { month, day, date } = formatDate(currentDate);

  // Create date block
  const dateDiv = document.createElement("div");
  dateDiv.className = "date";
  dateDiv.innerHTML = `
    <div class="date-month">${month}</div>
    <div class="date-day">${day}</div>
    <div class="date-date">${date}</div>
    <div class="date-bar"></div>
  `;

  // Add click event to select date
  dateDiv.addEventListener("click", () => {
    document
      .querySelectorAll(".date")
      .forEach((el) => el.classList.remove("selected"));
    dateDiv.classList.add("selected");
  });

  datePicker.appendChild(dateDiv);
}

// --=================
// Calender 2 -- Modal 2

const today1 = new Date();
const datePicker1 = document.getElementById("date-picker1");

for (let i = 0; i < 10; i++) {
  const currentDate = new Date(today1);
  currentDate.setDate(today.getDate() + i);
  const { month, day, date } = formatDate(currentDate);

  // Create date block
  const dateDiv = document.createElement("div");
  dateDiv.className = "date";
  dateDiv.innerHTML = `
      <div class="date-month">${month}</div>
      <div class="date-day">${day}</div>
      <div class="date-date">${date}</div>
      <div class="date-bar"></div>
    `;

  // Add click event to select date
  dateDiv.addEventListener("click", () => {
    document
      .querySelectorAll(".date")
      .forEach((el) => el.classList.remove("selected"));
    dateDiv.classList.add("selected");
  });

  datePicker1.appendChild(dateDiv);
}

// Time selection functionality
const timeButtons = document.querySelectorAll(".day-btn");
timeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Button clicked:", button.innerText); // Check if button click is detected
    timeButtons.forEach((btn) => {
      btn.classList.remove("selected-time"); // Remove selected-time class from other buttons
    });
    button.classList.add("selected-time"); // Add selected-time class to the clicked button
  });
});
