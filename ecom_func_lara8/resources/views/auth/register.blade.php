<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--favicon-->
    <link rel="icon" href="{{ asset('backend/') }}/assets/images/favicon-32x32.png" type="image/png" />
    <!--plugins-->
    <link href="{{ asset('backend/') }}/assets/plugins/vectormap/jquery-jvectormap-2.0.2.css" rel="stylesheet" />
    <link href="{{ asset('backend/') }}/assets/plugins/simplebar/css/simplebar.css" rel="stylesheet" />
    <link href="{{ asset('backend/') }}/assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css" rel="stylesheet" />
    <link href="{{ asset('backend/') }}/assets/plugins/metismenu/css/metisMenu.min.css" rel="stylesheet" />
    <!-- loader-->
    <link href="{{ asset('backend/') }}/assets/css/pace.min.css" rel="stylesheet" />
    <script src="{{ asset('backend/') }}/assets/js/pace.min.js"></script>
    <!-- Bootstrap CSS -->
    <link href="{{ asset('backend/') }}/assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="{{ asset('backend/') }}/assets/css/app.css" rel="stylesheet">
    <link href="{{ asset('backend/') }}/assets/css/icons.css" rel="stylesheet">
    <!-- Theme Style CSS -->
    <link rel="stylesheet" href="{{ asset('backend/') }}/assets/css/dark-theme.css" />
    <link rel="stylesheet" href="{{ asset('backend/') }}/assets/css/semi-dark.css" />
    <link rel="stylesheet" href="{{ asset('backend/') }}/assets/css/header-colors.css" />
    <title>Easy Shop - Responsive Bootstrap 5 Admin Template</title>
</head>

<body>
    <!--wrapper-->
    <div class="wrapper">
        <div class="d-flex align-items-center justify-content-center my-5 my-lg-0">
            <div class="container">
                <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
                    <div class="col mx-auto">
                        <div class="card">
                            <div class="card-body">
                                <div class="border p-4 rounded">
                                    <div class="text-center">
                                        <h3 class="">Sign Up</h3>
                                        <p>Already have an account? <a href="{{ route('login') }}">Sign in here</a>
                                        </p>
                                    </div>
                                    <div class="d-grid">
                                        <a class="btn my-4 shadow-sm btn-white" href="javascript:;"> <span
                                                class="d-flex justify-content-center align-items-center">
                                                <img class="me-2"
                                                    src="{{ asset('backend/') }}/assets/images/icons/search.svg"
                                                    width="16" alt="Image Description">
                                                <span>Sign Up with Google</span>
                                            </span>
                                        </a> <a href="javascript:;" class="btn btn-facebook"><i
                                                class="bx bxl-facebook"></i>Sign Up with Facebook</a>
                                    </div>
                                    <div class="login-separater text-center mb-4"> <span>OR SIGN UP WITH EMAIL</span>
                                        <hr />
                                    </div>
                                    <div class="form-body">
                                        <form class="row g-3" method="POST" action="{{ route('register') }}">
                                            @csrf
                                            <div class="col-12">
                                                <label for="inputLastName" class="form-label">Name</label>
                                                <input type="text" class="form-control" id="name" name="name"
                                                    placeholder="Enter Name">
                                            </div>
                                            <div class="col-12">
                                                <label for="inputEmailAddress" class="form-label">Email Address</label>
                                                <input type="email" class="form-control" id="email" name="email"
                                                    placeholder="example@user.com">
                                            </div>
                                            <div class="col-12">
                                                <label for="inputChoosePassword" class="form-label">Password</label>
                                                <div class="input-group" id="show_hide_password">
                                                    <input type="password" name="password" class="form-control border-end-0"
                                                        id="password" placeholder="Enter Password"> <a href="javascript:;"
                                                        class="input-group-text bg-transparent"><i
                                                            class='bx bx-hide'></i></a>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <label for="inputChoosePassword" class="form-label">Password Confirmation</label>
                                                <div class="input-group" id="show_hide_password">
                                                    <input type="password" name="password_confirmation" class="form-control border-end-0"
                                                        id="password_confirmation" placeholder="Confirm Password"> <a href="javascript:;"
                                                        class="input-group-text bg-transparent"><i
                                                            class='bx bx-hide'></i></a>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox"
                                                        id="flexSwitchCheckChecked">
                                                    <label class="form-check-label" for="flexSwitchCheckChecked">I
                                                        read and agree to Terms & Conditions</label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="d-grid">
                                                    <button type="submit" class="btn btn-primary"><i
                                                            class='bx bx-user'></i>Sign up</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end row-->
            </div>
        </div>
    </div>
    <!--end wrapper-->
    <!--start switcher-->

    <!--end switcher-->
    <!-- Bootstrap JS -->
    <script src="{{ asset('backend/') }}/assets/js/bootstrap.bundle.min.js"></script>
    <!--plugins-->
    <script src="{{ asset('backend/') }}/assets/js/jquery.min.js"></script>
    <script src="{{ asset('backend/') }}/assets/plugins/simplebar/js/simplebar.min.js"></script>
    <script src="{{ asset('backend/') }}/assets/plugins/metismenu/js/metisMenu.min.js"></script>
    <script src="{{ asset('backend/') }}/assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js"></script>
    <script src="{{ asset('backend/') }}/assets/plugins/chartjs/js/Chart.min.js"></script>
    <script src="{{ asset('backend/') }}/assets/plugins/vectormap/jquery-jvectormap-2.0.2.min.js"></script>
    <script src="{{ asset('backend/') }}/assets/plugins/vectormap/jquery-jvectormap-world-mill-en.js"></script>
    <script src="{{ asset('backend/') }}/assets/plugins/jquery.easy-pie-chart/jquery.easypiechart.min.js"></script>
    <script src="{{ asset('backend/') }}/assets/plugins/sparkline-charts/jquery.sparkline.min.js"></script>
    <script src="{{ asset('backend/') }}/assets/plugins/jquery-knob/excanvas.js"></script>
    <script src="{{ asset('backend/') }}/assets/plugins/jquery-knob/jquery.knob.js"></script>
    <script>
        $(function() {
            $(".knob").knob();
        });
    </script>
    <script src="{{ asset('backend/') }}/assets/js/index.js"></script>
    <!--app JS-->
    <script src="{{ asset('backend/') }}/assets/js/app.js"></script>

    <script>
        $(document).ready(function() {
            $("#show_hide_password a").on('click', function(event) {
                event.preventDefault();
                if ($('#show_hide_password input').attr("type") == "text") {
                    $('#show_hide_password input').attr('type', 'password');
                    $('#show_hide_password i').addClass("bx-hide");
                    $('#show_hide_password i').removeClass("bx-show");
                } else if ($('#show_hide_password input').attr("type") == "password") {
                    $('#show_hide_password input').attr('type', 'text');
                    $('#show_hide_password i').removeClass("bx-hide");
                    $('#show_hide_password i').addClass("bx-show");
                }
            });
        });
    </script>
</body>

</html>
