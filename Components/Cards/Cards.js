// import React from 'react'
// import { Card, Progress } from 'antd';
// import {
//   CaretUpFilled,
// } from '@ant-design/icons';

// const Cards = (props) => {
//   return (
//     <>
//       <Card>
//         <div className="flex flex-row">
//           <h6>{props.title}</h6>
//           <img src={props.img} alt="" />
//         </div>
//         <span>{props.projectcount}</span>
//         <p>{props.Progress}</p>
//         {/* <Progress percent={12} /> */}
//         <p>{props.totalTask}</p>
//       </Card>
//     </>
//   )
// }

// export default Cards

// components/ReusableCard.js

import { Card, Progress } from 'antd';
import {
  CaretDownFilled,
  CaretUpFilled,
  CheckCircleOutlined,
  CheckCircleFilled
} from '@ant-design/icons';
const Cards = ({ title, progressPercentage, numberOfProjects, totalTask, imageUrl, isCompleted, progress }) => {
  const getProgressColor = () => {
    if (progress >= 75) {
      return 'green';
    } else if (progress >= 25) {
      return 'orange';
    } else {
      return 'red';
    }
  };
  return (
    <>
      <Card bordered={false} className='w-full ml-3'
      // cover={imageUrl && <img alt={title} src={imageUrl} />}
      // actions={[
      //   isCompleted ? (
      //     <CheckCircleOutlined
      //       key="completed" style={{ color: '#faad14' }} />
      //   ) : (
      //     <CheckCircleFilled key="in-progress" style={{ color: '#52c41a' }} />
      //   ),
      // ]}
      >
        {/* <Card.Meta title={title} description={progressPercentage} /> */}
        <h3 className="text-2xl">{`${title}`}</h3>
        <h2 className="text-3xl">{`${progressPercentage}`}</h2>
        <div className="project-details">
          <p>{`${numberOfProjects} projects`}</p>
          <Progress percent={progress} status={isCompleted ? 'success' : 'active'} />
          <p>{`Total Task ${totalTask}`}</p>
        </div>
      </Card>
      {/* <div className="card w-full">
      {/* {imageUrl && <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content p-4 ">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-500">{title}</h2>

        </div>
        {/* <p>{`${projectCount} projects`}</p>
        <p className="text-4xl font-semibold text-black">{numberOfProjects}</p>
        <div className='flex flex-row items-en'>
          <p className="text-black flex flex-row items-center w-auto">{`Progress ${progressPercentage}%`}
            <span className="icons flex mt-2 ml-2">
              {progress ? (
                <CaretUpFilled className={`text-xl icon text-${getProgressColor()}-500`} />
              ) : (
                <CaretDownFilled className={`text-xl icon text-${getProgressColor()}-500`} />
              )}
            </span>

          </p>
        </div>

        <div className="project-details flex flex-col mt-4">
          <Progress percent={progress} />
          <p>{`${totalTask} Tasks`}</p>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default Cards;
