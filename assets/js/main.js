document.addEventListener("DOMContentLoaded", function () {



    /* =========================
       FILTER EVENTS + SEARCH
    ========================= */


    const searchInput = document.getElementById("searchInput");

    const categoryFilter = document.getElementById("categoryFilter");

    const eventItems = document.querySelectorAll(".event-item");



    function filterEvents() {


        const search = searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";


        const category = categoryFilter
            ? categoryFilter.value
            : "all";



        eventItems.forEach(item => {



            // البحث ضمن كامل معلومات الفعالية
            const content =
                item.textContent.toLowerCase();



            const itemCategory =
                item.getAttribute("data-category");



            const matchSearch =
                content.includes(search);



            const matchCategory =
                category === "all" ||
                itemCategory === category;



            if (matchSearch && matchCategory) {

                item.style.display = "";

            } else {

                item.style.display = "none";

            }



        });


    }




    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterEvents
        );

    }



    if (categoryFilter) {

        categoryFilter.addEventListener(
            "change",
            filterEvents
        );

    }









    /* =========================
       SCROLL TO TOP
    ========================= */


    const scrollBtn =
        document.getElementById("scrollTopBtn");



    if (scrollBtn) {



        window.addEventListener("scroll", function () {



            if (window.scrollY > 200) {


                scrollBtn.style.display = "block";


            } else {


                scrollBtn.style.display = "none";


            }



        });






        scrollBtn.addEventListener("click", function () {



            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });



        });



    }









    /* =========================
       DARK MODE
    ========================= */


    const darkModeToggle =
        document.getElementById("darkModeToggle");




    if (darkModeToggle) {



        // تحميل الوضع السابق

        if (localStorage.getItem("dark") === "1") {


            document.body.classList.add(
                "dark-mode"
            );


        }






        darkModeToggle.addEventListener(
            "click",
            function () {



                document.body.classList.toggle(
                    "dark-mode"
                );



                if (
                    document.body.classList.contains(
                        "dark-mode"
                    )
                ) {



                    localStorage.setItem(
                        "dark",
                        "1"
                    );



                } else {



                    localStorage.setItem(
                        "dark",
                        "0"
                    );



                }



            }
        );



    }

});
