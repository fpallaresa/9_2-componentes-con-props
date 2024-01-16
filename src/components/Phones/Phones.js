function PhonesComponent() {
    const phones = ["iPhone", "Galaxy", "Redmi", "OnePlus"];

    return (
        <div className="phones">
            <ul>
                {phones.map((brandPhone) => {
                    return <li key={brandPhone}>{brandPhone}</li>;
                })}
            </ul>
        </div>
    );
}

export default PhonesComponent;
