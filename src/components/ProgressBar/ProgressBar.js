import './ProgressBar.css'

export default function ProgressBar () {
    return (
        <div className="pb">
            <hr/>
                <div>
                    <progress max="100" value="20" className="progressbar" />
                </div>
            <hr/>
        </div>
    )
}
