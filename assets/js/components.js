document.addEventListener("DOMContentLoaded", function () {



    const navbar = `


    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">


        <div class="container">



            <a class="navbar-brand fw-bold"
            href="index.html">

                دليل فعاليات الجامعة الأفتراضية

            </a>





            <button class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#nav">


                <span class="navbar-toggler-icon"></span>


            </button>






            <div class="collapse navbar-collapse"
                 id="nav">






                <ul class="navbar-nav me-auto">





                    <li class="nav-item">

                        <a class="nav-link"
                           href="index.html">

                            الرئيسية

                        </a>

                    </li>







                    <li class="nav-item">

                        <a class="nav-link"
                           href="events.html">

                            الفعاليات

                        </a>

                    </li>







                    <li class="nav-item">

                        <a class="nav-link"
                           href="event.html?id=programming">

                            تفاصيل فعالية

                        </a>

                    </li>








                    <li class="nav-item">

                        <a class="nav-link"
                           href="about.html">

                            عن الدليل

                        </a>

                    </li>







                    <li class="nav-item">

                        <a class="nav-link"
                           href="contact.html">

                            اتصل بنا

                        </a>

                    </li>





                </ul>







                <button id="darkModeToggle"
                        class="btn btn-outline-light">

                    🌙

                </button>






            </div>




        </div>



    </nav>



    `;






    const container =
        document.getElementById("navbar");



    if(container){

        container.innerHTML = navbar;

    }



});
