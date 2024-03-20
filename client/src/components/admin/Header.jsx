import { useSelector } from "react-redux"

const Header = () => {
    const user = useSelector((state) => state.user.user)

    return (
        <div className="flex items-center justify-end py-3 pl-16 pr-8 md:justify-between lg:px-8">
            <h1 className="hidden text-xl font-semibold text-black sm:block">
                Welcome
            </h1>
            <div className="flex items-center space-x-3">
                <img
                    src={user.avatar}
                    alt={user.name.charAt(0)}
                    className="h-10 w-10 rounded-full object-cover"
                />
                <h1 className="truncate font-semibold">
                    {user.name.split(" ")[0]}
                </h1>
            </div>
        </div>
    )
}

export default Header
