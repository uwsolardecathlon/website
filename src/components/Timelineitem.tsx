import Subtitle1 from "./text/Subtitle1";

interface TLProps {
    label: string;
    content: string;
    number: string;
}

function TLItem(TLProp: TLProps) {
    const {label = 'N/A', content = 'N/A', number = 'N/A'} = TLProp;
    
    return (
        <li className="flex flex-col gap-3 divide-y divide-neutral-400 max-w-[16vw]">
            <p className="flex flex-row gap-4">
                <div className="text-neutral-300">0{number}.</div> 
                Phase {number}: {label}
            </p>
            <p className="pt-3">{content}</p>
        </li>
    );
}

export default TLItem;
