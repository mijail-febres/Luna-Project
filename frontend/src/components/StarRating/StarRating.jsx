import React, {useState, useCallback, useEffect} from "react";
import RatingContainer from "./StarRatingStyled";
class Point {
    constructor(p){
        this.x = p[0];
        this.y = p[1];
    }

    ang_to_center (cx,cy) {
        const x = cx-this.x;
        const y = cy-this.y;
        let angle = Math.atan2(y,x)
        if (y<0.0) {
            angle += 2.0 * Math.PI; 
        }
        return angle;
    }
}

const StarRating = ({height, width, review, stars}) => {
    const numberStar = 5;
    const [rating, setRating] = useState(-1);
    const [svgPlot, setSvg] = useState('loading..');
    const [svgFilled, setSvgFilled] = useState('loading..');
       
    useEffect(() => {
        const radius = height/2.0;
        const cx = radius;
        const cy = radius;
        const ang1 = 72.0*Math.PI/180.0;
        const ang2 = Math.PI/2.0 - ang1;
        let pp1 = [cx                          ,(cy+radius)];
        let pp2 = [cx+radius*Math.cos(ang2)    ,(cy+radius*Math.sin(ang2))];
        let pp3 = [cx+radius*Math.sin(ang1/2.0),(cy-radius*Math.cos(ang1/2.0))];
        let pp4 = [cx-radius*Math.sin(ang1/2.0),(cy-radius*Math.cos(ang1/2.0))];
        let pp5 = [cx-radius*Math.cos(ang2)    ,(cy+radius*Math.sin(ang2))];
        let pp6 = intersection(pp1,pp4,pp3,pp5)
        let pp7 = intersection(pp1,pp4,pp2,pp5)
        let pp8 = intersection(pp1,pp3,pp2,pp5)
        let pp9 = intersection(pp1,pp3,pp2,pp4)
        let pp10 = intersection(pp3,pp5,pp2,pp4)

        // Correcting y coordinates:
        pp1[1] = radius*2.0-pp1[1]
        pp2[1] = radius*2.0-pp2[1]
        pp3[1] = radius*2.0-pp3[1]
        pp4[1] = radius*2.0-pp4[1]
        pp5[1] = radius*2.0-pp5[1]
        pp6[1] = radius*2.0-pp6[1]
        pp7[1] = radius*2.0-pp7[1]
        pp8[1] = radius*2.0-pp8[1]
        pp9[1] = radius*2.0-pp9[1]
        pp10[1] = radius*2.0-pp10[1]

        const p1 = new Point(pp1)
        const p2 = new Point(pp2)
        const p3 = new Point(pp3)
        const p4 = new Point(pp4)
        const p5 = new Point(pp5)
        const p6 = new Point(pp6)
        const p7 = new Point(pp7)
        const p8 = new Point(pp8)
        const p9 = new Point(pp9)
        const p10 = new Point(pp10)

        const arrayPoints = sortPoints(cx,cy,[p1,p2,p3,p4,p5,p6,p7,p8,p9,p10]);

        let new_path = `M ${arrayPoints[0].x} ${arrayPoints[0].y}`;

        for (let i=1;i < arrayPoints.length;i++) {
            new_path += ` L ${arrayPoints[i].x} ${arrayPoints[i].y}`;
        }

        new_path += 'z'

        setSvg(new_path) 

        // if rating is not being created
        if (rating !== 'true') {
            let arrayAux = partialStars(arrayPoints)
            arrayPoints = arrayPoints.concat(arrayAux)
            // Correct coordinates
            for (let i=0;i<arrayPoints.length;i++) { // container coordinates
                arrayPoints[i].y = 2.0*radius - arrayPoints[i].y
            }
            // filter points (only those less than the rating will stay)
            arrayPoints = arrayPoints.filter(point => point.x <= parseFloat(stars));
   
            // sort points
            arrayPoints = sortPoints(cx,cy,arrayPoints);

            new_path = `M ${arrayPoints[0].x} ${arrayPoints[0].y}`;

            for (let i=1;i < arrayPoints.length;i++) {
                new_path += ` L ${arrayPoints[i].x} ${arrayPoints[i].y}`;
            }

            new_path += 'z'

            setSvgFilled(new_path) 

        }

    }, []);

    const handleOnClick = (index) =>{
        setRating(index)    
    }

    const intersection = (p1,p2,p3,p4) => { // intersection of line segments
        const det = (p1[0]-p2[0])*(p3[1]-p4[1])-(p1[1]-p2[1])*(p3[0]-p4[0]);
        const t = ((p1[0]-p3[0])*(p3[1]-p4[1])-(p1[1]-p3[1])*(p3[0]-p4[0]))/det;
        const u = ((p1[0]-p3[0])*(p1[1]-p2[1])-(p1[1]-p3[1])*(p1[0]-p2[0]))/det;
        if ((t>=0.0 && t<=1.0) && (u>=0.0 && u <=1.0)) {
            return [p1[0]+t*(p2[0]-p1[0]),p1[1]+t*(p2[1]-p1[1])];
        }
    } 

    const partialStars = (arrayPoints, radius) => {
        for (let i=0;i<arrayPoints.length;i++) { // returning to cartesian
            arrayPoints[i].y = arrayPoints[i].y + 2.0*radius
        }
        let p3 = new Point([stars, 0.0]);
        let p4 = new Point([stars, 2.0*radius]);

        // create intersections
        let arrayAux = [];
        for (let i=1;i<arrayPoints.length;i++) { // returning to cartesian
            let p1 = new Point([arrayPoints[i].x, arrayPoints[i].y])
            let p2 = new Point([arrayPoints[i-1].x, arrayPoints[i-1].y])
            let aux = intersection(p1,p2,p3,p4)
            arrayAux.push(new Point(aux))
        }
        return arrayAux;
    }

    const sortPoints = (cx,cy,arrayPoints) => {
        arrayPoints.sort((a,b) =>{
            return a.ang_to_center(cx,cy)-b.ang_to_center(cx,cy);
        })
        return arrayPoints;
    }

    return (
        <RatingContainer height={height} width={width}>
            <div className='Containers' id='starscontainer'>
                {[...Array(numberStar)].map((star, index) => { 
                    return(
                        review==='true'?
                        <div key={index} className='StarContainer' onClick={() => handleOnClick(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="starsvg" 
                                 fill={index<=rating?'gold':'#f2f2f2'} 
                                 style={{ width: "100%", height: "100%" }}
                                 viewBox={`0 0 100% ${height}`} stroke="currentColor">
                                <path strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d = {svgPlot}/>
                            </svg>
                        </div> 
                        :
                        null
                    )                
                })}
            </div>
        </RatingContainer>
    )
}

export default StarRating;