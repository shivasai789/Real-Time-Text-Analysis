import './index.css'

const CountContainers = (props) => {
    const {countItemDetails} = props
    const {countElement,count} = countItemDetails
    return (
<div className='count-element'>
    <p>{countElement}</p>
    <p>{count}</p>
</div>
    )
}

export default CountContainers