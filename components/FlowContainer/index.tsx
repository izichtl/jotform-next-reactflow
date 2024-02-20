'use client'
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useSearchParams } from 'next/navigation'
// @ts-ignore
import SwipeableViews from 'react-swipeable-views';


import Flow from '@/components/Flow'
import {
  ChipsContainer,
  Container,
  FormContainer,
  InsightsContainer,
  ModalTextContainer,
  NewSearchButton,
  NotSelectedReasonsChips,
  ReasonsChips,
  StyledBadge,
  TabContainer,
} from './style'

import {
  PageSubtitle,
  PageTitle,
  SecondTitle
} from '../text-styles'
//@ts-ignore
import Modal from 'react-modal';
import RectangularCard from '../InsightCard';

const returnHeight = (value: number, countData: number): string => {
  if (value === 2) {
    if (countData <= 3) return '450px'
    if (countData > 3 && countData <= 6) return '480px'
    if (countData > 6) return '650px'
  } else {
    return '300px'
  }
  return ''
}
const returnHeightMobile = (value: number, countData: number): string => {
  if (value === 2) {
    if (countData <= 3) return '750px'
    if (countData > 3 && countData <= 6) return '750px'
    if (countData > 6) return '750px'
  } else {
    return '300px'
  }
  return ''
}

const customStyles = {
  content: {
    width: '95%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const datas = [
  {
  title: 'Rede de Apoio',
  subtext: 'A construção de uma rede de apoio sólida é fundamental para o equilíbrio emocional e o bem-estar geral.',
  area: 'Mente',
  status: 'Atenção',
  link: 'https://lucassoaresdc.notion.site/Rede-de-Apoio-0e927c59a89f4b98874fa3117f163fb6'
  },
  {
  title: 'Trabalho',
  subtext: 'Alcançar equilíbrio na dimensão profissional é crucial para uma vida plena.',
  area: 'Mente',
  status: 'Atenção',
  link: 'https://lucassoaresdc.notion.site/Trabalho-c972d31cfa6f4dc48f555c3d48f79948?pvs=25'
  },
  {
  title: 'Finanças',
  subtext: 'Equilibrando a Dimensão Financeira: Um Guia para uma Vida Financeira Saudável',
  area: 'Mente',
  status: 'Atenção',
  link: 'https://lucassoaresdc.notion.site/Finan-as-ddaf1c34e86d40fb8e417c083ff277cc?pvs=4'
  },
  {
  title: 'Exercício Físico',
  subtext: 'A prática regular de exercícios físicos é vital para uma vida saudável e equilibrada.',
  area: 'Corpo',
  status: 'Atenção',
  link: 'https://lucassoaresdc.notion.site/Exerc-cio-F-sico-df493ceb54864abf97c3206afaec3dca?pvs=25'
  },
  {
  title: 'Alimentação',
  subtext: 'A alimentação desempenha um papel fundamental no bem-estar geral.',
  area: 'Corpo',
  status: 'Atenção',
  link: 'https://lucassoaresdc.notion.site/Alimenta-o-285489a7c4d341c9845d8d4fae460a48',
  },
  {
  title: 'Hobbies',
  subtext: 'Inserir hobbies na rotina diária é essencial para equilibrar o estresse e promover a satisfação pessoal.',
  area: 'Corpo',
  status: 'Atenção',
  link: 'https://lucassoaresdc.notion.site/Hobbies-0b70d40e30754fa0ba387285a30af284?pvs=25'
  },
  {
  title: 'Propósito',
  subtext: 'O propósito é a força motriz que dá significado à vida.',
  area: 'Espírito',
  status: 'Atenção',
  link: 'https://lucassoaresdc.notion.site/Prop-sito-a98205e783fd4d4bab241e4c020ac869'
  },
  {
  title: 'Experiências',
  subtext: 'A busca por experiências enriquecedoras é fundamental para criar uma vida plena.',
  area: 'Espírito',
  status: 'Atenção',
  link: 'https://lucassoaresdc.notion.site/Experi-ncias-4f227439d202467285cf26a8672fabee'
  },
  {
  title: 'Tribo Correta',
  subtext: 'A Tribo Correta refere-se a um círculo de relacionamentos próximos e significativos, composto por pessoas que compartilham valores',
  area: 'Espírito',
  status: 'Atenção',
  link: 'https://lucassoaresdc.notion.site/Tribo-Correta-2560b06841494af2b0140bd2426de5a0'
  }
]


export default function FlowContainer() {
  const theme = useTheme();

  const objectives = [ 
    "Organizar o dia a dia", 
    "Focar nos objetivos", 
    "Melhorar a saúde", 
    "Praticar exercícios", 
    "Melhorar a alimentação", 
    "Melhorar minhas finanças", 
    "Estar mais tempo com a família", 
    "Me dedicar a hobbies e projetos"
    ]
  const searchParams = useSearchParams()
  const search = searchParams.get('hashData')
  const [data, setData] = useState<any>(null)
  const [insights, setInsights] = useState<any>(null)
  const [modalIsOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue as any);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index as any);
  };

  const screenLimit = 762
  let innerWidth: number = 0
  if (typeof window !== 'undefined') {
    innerWidth = window.innerWidth
  }
  const [screenWidth, setScreenWidth] = useState(innerWidth)
  let isMobile = screenWidth < screenLimit


  useEffect(()=>{
    if (search !== null) {
      const decodeString = decodeURIComponent(search as string)
      const jsonString = atob(decodeString)
      const jsonObject = JSON.parse(jsonString) 
      const userObject = JSON.parse(jsonObject.mapjson)
      setData(userObject)
    }
  },[search])


  const handleWindowSizeChange = (): void => {
    if (typeof window !== 'undefined') {
        setScreenWidth(window.innerWidth)
        isMobile = screenWidth < screenLimit
      }
  }


  function filterArraysByKeyword(arrays: (string | string[])[][]): (string | string[])[][] {
    return arrays.filter(subArray => subArray.some(item => Array.isArray(item) && item.includes('Atenção')));
}
  const modelingInsight = (data: any) => {
    if (data !== null) {
    const filteredArrays = filterArraysByKeyword(data.maps)
    const filteredDatas = datas.filter((data) => {
      let v = false
      filteredArrays[0].forEach(array => {
        if(data.title === array[0]) v = true
      })
      return v
    })
    setInsights(filteredDatas)
  }
}


  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, []) 

  useEffect(()=>{
    modelingInsight(data)
  },[data])

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function a11yProps(index: number) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  const TabPanel = (props: any) => {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <TabContainer >
            <>{children}</>
          </TabContainer>
        )}
      </div>
    );
  }
  const tabStyle = (value === 1 || value === 2) ? returnHeight(value, insights.length) : '750px'
  const tabStyleMobile = (value === 1 || value === 2) ? returnHeightMobile(value, insights.length) : '750px'

  return (
    <Container
      background={theme.palette.background.default}
    >
      <PageTitle>{'Mapa da Vida'}</PageTitle>
      <PageSubtitle>{'Veja áreas da sua vida. Trace planos. Priorize o que é importante'}</PageSubtitle>
      {data !== null && (
        <>
          <Box sx={{
            width: '100%',
            height: {
              xs: tabStyleMobile, 
              sm: tabStyleMobile, 
              md: tabStyle, 
            }
          }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="primary"
              indicatorColor="primary"
              aria-label="secondary tabs example"
            >
            <Tab  label="mapa" {...a11yProps(0)}/>
            <Tab  label="objetivos" {...a11yProps(1)}/>
            <Tab  label="insights" {...a11yProps(2)} icon={<StyledBadge color="warning" badgeContent={insights !== null ? insights.length : 0}/>} iconPosition="end" />



          </Tabs>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
        <TabPanel value={value} index={0} 
        dir={theme.direction}
        >
          <Flow
            isMobile={isMobile}
            data={data}
            mind={data.maps[0]}
            body={data.maps[1]}
            spirit={data.maps[2]}
          />
        </TabPanel>
        <TabPanel value={value} index={1} 
        dir={theme.direction}
        >
      <ChipsContainer>
      {data !== null && (
        objectives.map((item: any) => {
          const index = data.reasons.indexOf(item)
          return (<>
            {index !== -1 && (              
              <ReasonsChips>{item}</ReasonsChips>
            )}  
            {index === -1 && (              
              <NotSelectedReasonsChips>{item}</NotSelectedReasonsChips>
            )}  
          </>
          )
        })
        
      )}
      </ChipsContainer>
      </TabPanel>
        <TabPanel value={value} index={2} 
        dir={theme.direction}
        >
          <InsightsContainer>
            {insights !== null && insights.map((item: any) => {
            return (
              <RectangularCard
                title={item.title}
                subtext={item.subtext}
                area={item.area}
                status={item.status}
                link={item.link}
              />
            )
          })}
          </InsightsContainer>
        </TabPanel>
      </SwipeableViews>
    </Box>
        <ModalTextContainer>
          <SecondTitle>{'Vamos construir uma experiência útil?'}</SecondTitle>
          <PageSubtitle>{'Gostaríamos de entender qual foi a sua percepção sincera sobre a ferramenta?'}</PageSubtitle>
          <NewSearchButton onClick={openModal}>Avaliar</NewSearchButton>
        </ModalTextContainer>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {true && (
              //@ts-ignore
              <iframe src="https://forms.gle/XbY6fgxi9ia4XCnP8?embedded=true" width="100%" height="700" frameborder="0" 
              marginheight="0" marginwidth="0">Loading…</iframe>
            )}
          <FormContainer>
            <NewSearchButton onClick={closeModal}>Fechar</NewSearchButton>
          </FormContainer>
        </Modal>
        </>
      )}
  </Container>)
}


