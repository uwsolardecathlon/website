
interface TLProps {
    label: string;
    content: string;
    number: string;
}

function TLItem(TLProp: TLProps) {
    const {label = 'N/A', content = 'N/A', number = 'N/A'} = TLProp;
    
    return (
        <>
        </>
    );
}

export default TLItem;
