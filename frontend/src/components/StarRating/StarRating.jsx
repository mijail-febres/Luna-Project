// This container handles the rating in form of stars
// Use:
// Add this container to your div like this:
// <StarRating height='50' width='250' review='false' stars='3.7' />
// Where height and width are the dimensions of the rating system, review is
// false or true depending on the action os the user, true if the user
// is writing a review, false if the component is only showing the rating
// from the backend.
// stars is the rating of the restaurant based on backend information.

import React, {useState, useCallback, useEffect} from "react";
import RatingContainer from "./StarRatingStyled";
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurantRating } from "../../store/actions";
// import store from '../../store';

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
    const [flag_decimals, setFlagDecimals] = useState(true);
    const dispatch = useDispatch();
    const [local_stars,setLocalStars] = useState(0);

    useEffect(() => {
        setLocalStars(Math.round(parseFloat(stars) * 10) / 10)
        const radius = height/2.0;
        const cx = radius;
        const cy = radius;
        const ang1 = 72.0*Math.PI/180.0;
        const ang2 = Math.PI/2.0 - ang1;
        let new_path = '';
        let new_path2 = '';

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

        let arrayPoints = sortPoints(cx,cy,[p1,p2,p3,p4,p5,p6,p7,p8,p9,p10]);

        new_path = `M ${arrayPoints[0].x} ${arrayPoints[0].y}`;

        for (let i=1;i < arrayPoints.length;i++) {
            new_path += ` L ${arrayPoints[i].x} ${arrayPoints[i].y}`;
        }

        new_path += 'z'
        setSvg(new_path) 

        if (review!=='true'){
            if (!(Math.abs(parseFloat(stars)-Math.floor(parseFloat(stars)))>0.0)) { // Only make sense if we have decimals
                setFlagDecimals(false)
            }
        }

        // Set the rating of restaurant to 0
        dispatch(setRestaurantRating(0))
    }, []);

    const handleOnClick = (index) =>{
        setRating(index)
        dispatch(setRestaurantRating(index + 1))
    }

    const intersection = (pa,pb,pc,pd) => { // intersection of line segments
        const det = (pa[0]-pb[0])*(pc[1]-pd[1])-(pa[1]-pb[1])*(pc[0]-pd[0]);
        const t = ((pa[0]-pc[0])*(pc[1]-pd[1])-(pa[1]-pc[1])*(pc[0]-pd[0]))/det;
        const u = ((pa[0]-pc[0])*(pa[1]-pb[1])-(pa[1]-pc[1])*(pa[0]-pb[0]))/det;
        let answer = [];
        if ((t>=0.0 && t<=1.0) && (u>=0.0 && u <=1.0)) {
            let x=pa[0]+t*(pb[0]-pa[0]);
            let y=pa[1]+t*(pb[1]-pa[1]);
            answer.push(x);
            answer.push(y);
        }
        return answer;
    } 

    const sortPoints = (cx,cy,someArray) => {
        someArray.sort((a,b) =>{
            return a.ang_to_center(cx,cy)-b.ang_to_center(cx,cy);
        })
        return someArray;
    }

    return (
        <RatingContainer height={height} width={width}>
            <div className='Containers' id='starscontainer'>
                {[...Array(numberStar)].map((star, index) => { 
                    return(
                        review === 'true'?
                            <div 
                                key={index} 
                                className='StarContainer1' 
                                onClick={() => handleOnClick(index)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill={index<=rating?'gold':'#EBEBEB'} 
                                    style={{ width: "100%", height: "100%" }}
                                    viewBox={`0 0 100% ${height}`} stroke="currentColor">
                                    <path strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={0} 
                                    d = {svgPlot}/>
                                </svg>
                            </div> 
                        :
                            flag_decimals?
                                <div 
                                    key={index} 
                                    className='StarContainer1'>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill={index<Math.floor(local_stars)?'gold': index>local_stars?'#EBEBEB':'url(#Gradient1)'} 
                                        style={{ width: "100%", height: "100%" }}
                                        viewBox={`0 0 100% ${height}`} stroke="currentColor">
                                        <defs>
                                            <linearGradient id="Gradient1">
                                                <stop offset="0" stopColor="gold"/>
                                                <stop offset={`${Math.round((local_stars-Math.floor(local_stars))*10)/10}`} stopColor="gold"/>
                                                <stop offset={`${Math.round((local_stars-Math.floor(local_stars))*10)/10}`} stopColor="#EBEBEB"/>
                                                <stop offset='1' stopColor="#EBEBEB"/>
                                            </linearGradient>
                                        </defs>
                                        <path strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={0} 

                                        d = {svgPlot}/>
                                    </svg>
                                </div>
                            :
                                <div 
                                    key={index} 
                                    className='StarContainer1'>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill={index<Math.floor(local_stars)?'gold': '#EBEBEB'} 
                                        style={{ width: "100%", height: "100%" }}
                                        viewBox={`0 0 100% ${height}`} stroke="currentColor">
                                        <path strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={0} 
                                        d = {svgPlot}/>
                                    </svg>
                                </div>
                    )                
                })}
            </div>
        </RatingContainer>
    )
}

export default StarRating;
