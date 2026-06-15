
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupsIcon from '@mui/icons-material/Groups';
const features=[{title:'Project Management', decription:'Create and manage projects with clear structure and deadlines',icon:DashboardCustomizeIcon},{
title:'Task tracking',decription:'Break projects into tasks and track progress easily',icon:AssignmentIcon},{
    title:'Progress Overview',decription:'Visualize your work with simple and clear progress tracking',icon:BarChartIcon},
{title:'Team collaboration',decription:'Work together,share tasks,and stay aligned as a team',icon:GroupsIcon}];
export default function Features(){
    return(
<section id="features" className="flex flex-col items-center  text-center bg-[#F8FAFC] md:py-32 py-24  px-10 ">
    <h1 className="text-xl font-bold text-[#0F172A]  md:text-2xl">Powerful <span className="text-[#22C55E]">features</span> you need to manage your work</h1>
    <div className="grid grid-flow-row grid-cols-2 gap-3 mt-6 md:grid-cols-4">
      {features.map((feature,index)=>{
        const Icon=feature.icon;
        return(
            <div key={index} className="flex flex-col items-center justify-center w-auto h-auto p-3 text-center bg-[#FFFFFF] border border-spacing-2 border-[#E5E7EB] rounded-sm shadow-md hover:shadow-xl hover:-translate-y-1 transition-all  duration-300">
<Icon className="text-[#3B82F6] text-4xl mb-2"/>
<h3 className="mt-3 font-semibold text-[#0F172A]">{feature.title}</h3>
<p className="mt-2 text-[#475569]">{feature.decription}</p>
            </div>
        )
      })}

    </div>

</section>

    )
}