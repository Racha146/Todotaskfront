
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import TimelineIcon from '@mui/icons-material/Timeline';
const works=[{title:'Creat an account', decription:'Sign up in minutes and set up your workspace',icon:PersonAddIcon},{
    title:'Manage your tasks',decription:'organize,track,and prioritize your work easily',icon:TaskAltIcon},{
        title:'Track your progress',decription:'Stay on top of deadlines and boost productivity',icon:TimelineIcon}
];
    export default function Howitwork(){
        return(
    <section id="how-it-works"  className="flex flex-col items-center  text-center bg-[#F8FAFC] md:py-16 py-14 px-10 ">
        <h1 className="text-xl font-bold text-[#0F172A]  md:text-2xl">How it <span className="text-[#22C55E]">works?</span> </h1>
        <p className="mt-3 font-semibold text-gray-600">Get started in just three simple steps</p>
        <div className="grid grid-flow-row grid-cols-1 gap-3 mt-6 md:grid-cols-3">
          {works.map((work,index)=>{
            const Icon=work.icon;
            return(
                <div key={index} className="flex flex-col items-center justify-center w-auto h-auto p-3 text-center bg-[#FFFFFF] border border-spacing-2 border-[#E5E7EB] rounded-xl shadow-md hover:shadow-xl transition-all hover:translate-y-1 duration-200">
    <Icon className="text-[#3B82F6] text-4xl mb-2"/>
    <h3 className="mt-3 font-semibold text-[#0F172A]">{work.title}</h3>
    <p className="mt-2 text-[#475569]">{work.decription}</p>
                </div>
            )
          })}
    
        </div>
    
    </section>
    
        )
    }