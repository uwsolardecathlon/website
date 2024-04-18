interface ContentProps {
    top: string;
    list: Array<string>;
    bottom: string;
}

function TLContent(ContentProps: ContentProps) {
    let {top, list, bottom} = ContentProps;
    return (
        <section className='pt-3'>
          <p>{top}</p>
          <ul className='list-disc px-6 mb-5'>
            {list.map((item) => (
                <li>{item}</li>
            ))}
          </ul>
          <p>{bottom}</p>
        </section>
    );
}

export default TLContent;