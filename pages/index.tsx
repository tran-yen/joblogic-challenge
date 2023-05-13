import type { NextPage } from 'next'
import React,  { useState } from 'react';
import Head from 'next/head'
import {  Layout, Col, Row } from 'antd';

import 'antd/dist/antd.css';
import style from '../styles/Home.module.css'

import NavBlock from '../components/nav-block';
import DetailBlock from '../components/detail-block';
import data from "./api/data.json";
import { employee } from '../components/use';

const { Header, Content } = Layout;
const Home: NextPage = () => {
  const [dataE, setDataE] = useState<Array<employee>>(data.employees);
  const [actEmp, setActEmp] = useState<employee>(dataE[0]);
  const [actIndex, setActIndex] = useState<number>(0);

  const changeEmp = (i:number) => {
    setActEmp(dataE[i]);
    setActIndex(i);
  }

  const updatePopularity = (value: number) => {
    const currEmp = {...actEmp};
    currEmp.popularity = value;

    setActEmp(currEmp);
    setDataE(prev => {
      const currData = [...prev];
      currData[actIndex] = currEmp;
      return currData;
    });
  }

  return (
    <div className={style.container}>
      <Head>
        <title>UI Developer Code Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header>Header</Header>
        <Content className={style.main}>
          <Row>
            <Col span={6}><NavBlock list={dataE} active={0} onSelectionChange={changeEmp} /></Col>
            <Col span={18}><DetailBlock emp={actEmp} onPopularityChange={updatePopularity}/></Col>
          </Row>
        </Content>
      </Layout>
    </div>
  )
}

export default Home
