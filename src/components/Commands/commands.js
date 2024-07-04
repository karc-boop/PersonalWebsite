

export default {
    commands: {
        about: {
            description: 'About Me.',
            usage: 'about',
            fn: () => {
                return "About Me.\n---\n Female | Asian | First-Gen \nMSCS Grad Student@Northeastern\nSoftware Engineer Intern@Ipser Lab\n"
                       + "Hi, this is Karmen. Currently I am a master student majoring in computer science align at Northeastern, interning for a startup focusing on marketing strategy business. Besides, I am passionate about building real-world mobile application(iOS & Android) driven by Large Language Models."
            }
        },
        github: {
            description: 'Opens my GitHub Profile.',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/asrvd', '_blank');
                return "opening github account..."
            }
        },
        linkedin: {
            description: "Opens my Linkedin Profile.",
            usage: "linkedin",
            fn: () => {
                window.open('https://www.linkedin.com/in/karmen-cai/', '_blank');
                return "opening linkedin account..."
            }
        },
        languages: {
            description: 'Languages I know.',
            usage: 'languages',
            fn: () => {
                const drawBar = (percent) => {
                    const barLength = 20;
                    const filledLength = Math.round(barLength * percent / 100);
                    const emptyLength = barLength - filledLength;
                    const bar = '█'.repeat(filledLength) + '░'.repeat(emptyLength);
                    return bar;
                };

                return `
                    these are the languages I know.\n \n
                    Python________[${drawBar(95)}] 
                    Java__________[${drawBar(95)}] 
                    C/C++_________[${drawBar(90)}] 
                    Swift_________[${drawBar(90)}] 
                    JavaScript____[${drawBar(75)}] 
                    Go-lang_______[${drawBar(50)}] [learning......]\n \n
                `
            }
        },
        projects: {
            description: 'Projects I have worked on.',
            usage: 'projects',
            fn: () => {
                return `
                    <div style="font-family: monospace;">
                        Cool projects I have worked on and been working on.
                        <table>
                            <tr>
                                <td>Full Stack Dev</td>
                                <td>| Admin DashBoard Section</td>
                                <td>| React.js</td>
                            </tr>
                            <tr>
                                <td colspan="3">
                                    <img src="/assets/images/base.jpg" alt="Admin Dashboard" style="width:300px;"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Full Stack Dev</td>
                                <td>| Food Delivery</td>
                                <td>| Java, SpringBoot</td>
                            </tr>
                            <tr>
                                <td colspan="3">
                                    <img src="../assets/images/food-delivery.png" alt="Food Delivery" style="width:300px;"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Mobile Dev</td>
                                <td>| Pat Pat</td>
                                <td>| Swift</td>
                            </tr>
                            <tr>
                                <td colspan="3">
                                    <img src="../assets/images/pat-pat.png" alt="Pat Pat" style="width:300px;"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Lower Level Dev</td>
                                <td>| Network Server</td>
                                <td>| C++</td>
                            </tr>
                            <tr>
                                <td colspan="3">
                                    <img src="../assets/images/network-server.png" alt="Network Server" style="width:300px;"/>
                                </td>
                            </tr>
                        </table>
                    </div>
                `;
            }
        },
    },
    overwrites: {
        help: {
            description: 'List all available commands',
            usage: 'help',
        },
    }
};
