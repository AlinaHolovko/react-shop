import './EmptyPage.scss'


function EmptyPage ({text}) {
    return (
        <div className="empty">
            <p>Тут будуть товари, які ви додали до розділу "{text}"</p>
        </div>
    )
}

export default EmptyPage;