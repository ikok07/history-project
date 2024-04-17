export default function OptionalImage({ url }) {
    return <div className="quiz-image-wrapper">
        <img src={url} alt="quiz-image" className="quiz-image"/>
    </div>
}