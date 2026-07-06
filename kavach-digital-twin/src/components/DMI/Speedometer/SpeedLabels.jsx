export default function SpeedLabels() {

    const labels = [];

    const startAngle = -130;
    const endAngle = 130;

    for (let i = 0; i <= 9; i++) {

        const value = i * 20;

        const angle =
            startAngle + ((endAngle - startAngle) / 9) * i;

        const rad = angle * Math.PI / 180;

        const x = 200 + 118 * Math.cos(rad);

        const y = 205 + 118 * Math.sin(rad);

        labels.push(

            <text

                key={i}

                x={x}

                y={y}

                fill="white"

                fontSize="18"

                textAnchor="middle"

                dominantBaseline="middle"

            >

                {value}

            </text>

        );

    }

    return <>{labels}</>;

}