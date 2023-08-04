import React from "react"

const Home = () => {
    const divArray = Array.from({ length: 20 }, (_, index) => index + 1)
    // const divArray = Array.from({ length: 1 }, (_, index) => index + 1)

    return (
        <div className="PageContainer HomeContainer">
            {divArray.map((divNumber) => (
                <div
                    key={divNumber}
                    style={{
                        width: "100%",
                        height: "100px",
                        border: "1px solid white",
                    }}
                >
                    Content
                </div>
            ))}
        </div>
    )
}

export default Home
