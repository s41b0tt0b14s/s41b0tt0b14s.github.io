document.getElementById("sort-by").addEventListener("change", function (event) {
    const sortBy = event.target.value; 
    const courses = Array.from(document.querySelectorAll(".sub-heading"));
    const coursesContainer = document.querySelector(".course"); 

    courses.sort((a, b) => {
        const courseA = a.getAttribute("data-course");
        const courseB = b.getAttribute("data-course");
        const dateA = a.getAttribute("data-date");
        const dateB = b.getAttribute("data-date");

        if (sortBy === "course-number") {
            return courseA - courseB;
        } else if (sortBy === "course-number-reverse") {
            return courseB - courseA;
        } else if (sortBy === "date-taken") {
            return dateA - dateB;
        } else if (sortBy === "date-taken-reverse") {
            return dateB - dateA;
        }
    });

    coursesContainer.innerHTML = ""; 
    courses.forEach(course => coursesContainer.appendChild(course));
});
