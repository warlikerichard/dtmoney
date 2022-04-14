interface Props{
    img: string;
    title: string;
    content: string;
    class?: string;
}
export function Element(props: Props){
    return(
        <div className={props.class}>
            <header>
                <p> {props.title} </p>
                <img src={props.img} alt={props.title} />
            </header>
            <strong> {props.content} </strong>
        </div>
    );
}