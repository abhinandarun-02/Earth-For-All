import './info.css'
import InfoCard from './InfoCard';

const Info = () => {
    const data = [
        { number: '422+', title: 'Saved Animals', text: 'Save Animal Campaign' },
        { number: '1248', title: 'Saved Animals', text: 'Save Animal Campaign' },
        { number: '614', title: 'Saved Animals', text: 'Save Animal Campaign' },
        { number: '789', title: 'Saved Animals', text: 'Save Animal Campaign' },]
    return (
        <div>
            <h1 className='info-header text-6xl'>Our Activities</h1>
            <div className="info-section grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:px-8">
                {data.map((item, index) => {
                    return <InfoCard key={index} number={item.number} title={item.title} text={item.text} />
                }
                )}
            </div>
        </div>
    );
}

export default Info;