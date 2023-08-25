interface Props {
    name: string;
    onClick: () => void;
    type: 'default' | 'cancel' | 'opacity'; // Specify the allowed type values
}

function Button({ name, onClick = () => {}, type = 'default' }: Props) {
    const defineClass: Record<string, string> = {
        default: 'text-white bg-primary hover:brightness-105  text-center',
        opacity: 'text-white bg-[rgba(168,85,247,1)] hover:brightness-105 text-center',
        cancel: 'text-[rgba(239,68,68,1)] bg-[rgba(239,68,68,0.2)] hover:brightness-105 text-center',
    };
    const buttonClass = defineClass[type]; // Changed variable name to avoid conflict with reserved word
    return (
        <button
            onClick={onClick}
            className={`min-w-[10rem] hover:brightness-125 py-2  text-sm rounded-md ${buttonClass}`}
        >
            {name}
        </button>
    );
}

export default Button;
