export default function Contact() {
    const contacts = [
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        link: "https://github.com/username",
      },
      {
        name: "LinkedIn",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
        link: "https://linkedin.com/in/username",
      },
      {
        name: "Email",
        icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
        link: "mailto:racha@example.com",
      },
    ];
  
    return (
      <section id="contact" className="bg-[#F8FAFC]  py-20 px-6 text-white">
        <div className="flex flex-col items-center max-w-6xl mx-auto space-y-8">
          <h1 className="text-2xl md:text-3xl font-bold  text-[#0F172A]">
            Let's <span  className="text-[#3B82F6]">work</span> together
          </h1>
  
          <p className="max-w-xl text-center text-gray-600">
          Join teams who trust us to organize and simplify their workflow
          </p>
  
          <div className="flex space-x-8 text-[#1F2937]">
            {contacts.map((contact) => (
              <a
                key={contact.name}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center transition transform hover:scale-110"
              >
                <img src={contact.icon} alt={contact.name} className="w-12 h-12 mb-2" />
                
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
  