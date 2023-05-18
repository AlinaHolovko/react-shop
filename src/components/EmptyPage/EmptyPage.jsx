import './EmptyPage.scss'


function EmptyPage ({text}) {
    return (
        <div className="empty">
            <p>Here will be the products that you have added to the section "{text}"</p>
        </div>
    )
}

export default EmptyPage;