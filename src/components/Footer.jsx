export default function Footer(){
    return(
        <section className="flex flex-col items-center justify-between w-full px-6 py-6 mx-auto text-white bg-slate-900 md:flex-row ">
            <div className="mb-4 text-xl font-bold md:mb-0">Task<span className="text-[#3b82f6]">Flow</span></div>
            <div className="flex mb-4 space-x-6 md:mb-0">
                <a href="#" className="hover:text-[#3b82f6] transition">Email</a>
                <a href="#" className="hover:text-[#3b82f6] transition">GitHub</a>
                <a href="#" className="hover:text-[#3b82f6] transition">LinkedIn</a>
            </div>

<div className="text-sm text-slate-400">&copy; {new Date().getFullYear()}TaskFlow. All rights reserved.</div>
        </section>
    )
}