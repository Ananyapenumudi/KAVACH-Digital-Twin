export default function TickMarks() {

    const ticks = [];

    const startAngle = -130;

    const endAngle = 130;

    for (let i = 0; i <= 45; i++) {

        const angle =
            startAngle + ((endAngle - startAngle) / 45) * i;

        const rad = angle * Math.PI / 180;

        const outer = 150;

        const inner = i % 5 === 0 ? 132 : 140;

        ticks.push(

            <line

                key={i}

                x1={200 + inner * Math.cos(rad)}

                y1={200 + inner * Math.sin(rad)}

                x2={200 + outer * Math.cos(rad)}

                y2={200 + outer * Math.sin(rad)}

                stroke="white"

                strokeWidth={i % 5 === 0 ? 4 : 2}

            />

        );

    }

    return <>{ticks}</>;

}