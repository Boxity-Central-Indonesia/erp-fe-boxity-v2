import { DropdownNav } from "./DropdownNav"

export const Navbar = () => {
    return (
        <> 
            <nav className="w-full mx-auto py-2 px-5 flex justify-between bg-white left-0 right-0 top-0 fixed z-50 border-b">
                <div>
                    <img className="h-11" src="https://res.cloudinary.com/du0tz73ma/image/upload/v1724160254/niW7Uq9WEpa80To1Y7OrmgZmTeYIBq-metaYTQtaGVhZGVyLnBuZw_-_fz0qyj.png" alt="" />
                </div>
                <div>
                    <DropdownNav />
                </div>
            </nav>
        </>
    )
}