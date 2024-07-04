import Terminal from 'react-console-emulator';
import commands from '../components/Commands/commands.js';
import React from 'react';

export default function Term() {
    const cmds = commands.commands;
    const owrs = commands.overwrites;
    const terminal = React.createRef();
    const [prompt, setPrompt] = React.useState('you@/karcterm:~$ ');
    const [home, sethome] = React.useState('karcterm');
    const [dir, setdir] = React.useState({
                                             'karcterm': []
                                         });

    const processOutput = (output) => {
        if (/<[a-z][\s\S]*>/i.test(output)) {
            return <div dangerouslySetInnerHTML={{ __html: output }} />;
        }
        return output;
    };

    return (
        <Terminal
            ref={terminal}
            welcomeMessage={[
                "Welcome to Karmen's site!",
                "---",
                "This is my personal website.",
                "---",
                "Type 'help' to start discovering me.",
                "---",
            ]}
            commands={{
                help: {
                    description: 'List all available commands',
                    usage: 'help',
                    fn: () => {
                        return `
                            ${Object.keys(owrs).map(cmd => `${cmd}${" ".repeat(12 - cmd.length)} | ${owrs[cmd].description}${" ".repeat(39 - owrs[cmd].description.length)} | ${owrs[cmd].usage}`).join('\n')}
                            ${Object.keys(cmds).map(cmd => `${cmd}${" ".repeat(12 - cmd.length)} | ${cmds[cmd].description}${" ".repeat(39 - cmds[cmd].description.length)} | ${cmds[cmd].usage}`).join('\n')}
                        `;
                    }
                },
                ...Object.keys(cmds).reduce((acc, cmd) => {
                    acc[cmd] = {
                        ...cmds[cmd],
                        fn: () => processOutput(cmds[cmd].fn())
                    };
                    return acc;
                }, {})
            }}
            promptLabel={prompt}
            autoFocus
            style={{
                backgroundColor: null,
                minHeight: null,
                maxHeight: null,
                overflow: 'auto',
                height: '100%',
                width: '100%',
            }}
            styleEchoBack='fullInherit'
            contentStyle={{ color: '#ffb86c', fontWeight: 'normal', paddingLeft: null }} // Text colour
            promptLabelStyle={{ color: '#8be9fd', fontWeight: 'normal' }} // Prompt label colour
            inputTextStyle={{ color: '#f1fa8c', fontWeight: 'normal' }}
            messageStyle={{ color: '#ffffff', fontWeight: 'normal', paddingLeft: null }}
            scrollBehavior='auto'
            noDefaults
        />
    );
}

