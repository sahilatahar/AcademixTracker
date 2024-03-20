import { Link } from "react-router-dom"
import bgImage from "../../assets/bg-image.jpg"
import logo from "../../assets/logo.png"

const Login = () => {
    return (
        <div
            className="flex min-h-screen w-full justify-center bg-cover bg-fixed bg-center bg-no-repeat p-4 backdrop-blur-md"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            <div className="flex w-full flex-col items-center space-y-20">
                <span className="mt-10 flex items-center gap-8 rounded-lg border-2 border-light bg-transparent p-2 text-black backdrop-blur-lg md:rounded-full">
                    <img
                        src={logo}
                        className="w-h-16 hidden h-16 rounded-full sm:block"
                        alt="logo"
                    />
                    <h1 className="w-full text-center text-3xl font-bold">
                        Welcome to College Management System
                    </h1>
                    <img
                        src={logo}
                        className="w-h-16 hidden h-16 rounded-full sm:block"
                        alt="logo"
                    />
                </span>
                <div className="flex w-full flex-wrap items-center justify-center gap-8 md:gap-20">
                    <div className="flex w-1/4 min-w-[300px] flex-col items-center justify-center space-y-4 rounded-xl border-2 border-light p-4 py-12 shadow-2xl backdrop-blur-lg">
                        <h1 className="pb-12 pt-4 text-4xl font-extrabold">
                            Admin
                        </h1>
                        <Link
                            type="button"
                            to="/admin/login"
                            className="flex w-full items-center justify-center rounded-md bg-primary py-2 text-lg font-semibold text-black"
                        >
                            Login
                        </Link>
                        <Link
                            type="button"
                            to="/admin/register"
                            className="flex w-full items-center justify-center rounded-md bg-primary py-2 text-lg font-semibold text-black"
                        >
                            Register
                        </Link>
                    </div>
                    <div className="flex w-1/4 min-w-[300px] flex-col items-center justify-center space-y-4 rounded-xl border-2 border-light p-4 py-12 shadow-2xl backdrop-blur-lg">
                        <h1 className="pb-12 pt-4 text-4xl font-extrabold">
                            Faculty
                        </h1>

                        <Link
                            type="button"
                            to="/faculty/login"
                            className="flex w-full items-center justify-center rounded-md bg-primary py-2 text-lg font-semibold text-black"
                        >
                            Login
                        </Link>
                        {/* <Link
							type="button"
							to="/faculty/register"
							className="flex items-center justify-center bg-primary text-black text-lg rounded-md py-2 w-full font-semibold"
						>
							Register
						</Link> */}
                    </div>
                    <div className="flex w-1/4 min-w-[300px] flex-col items-center justify-center space-y-4 rounded-xl border-2 border-light p-4 py-12 shadow-2xl backdrop-blur-lg">
                        <h1 className="pb-12 pt-4 text-4xl font-extrabold">
                            Student
                        </h1>
                        <Link
                            type="button"
                            to="/student/login"
                            className="flex w-full items-center justify-center rounded-md bg-primary py-2 text-lg font-semibold text-black"
                        >
                            Login
                        </Link>
                        {/* <Link
							type="button"
							to="/student/register"
							className="flex items-center justify-center bg-primary text-black text-lg rounded-md py-2 w-full font-semibold"
						>
							Register
						</Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
