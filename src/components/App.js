import React from 'react'
import TaskList from './TaskList'
import TaskContextProvider from '../context/TaskContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'

class App extends React.Component {
    render() {
        return (
            <TaskContextProvider>
                <Container>
                    <Row className="align-items-center mt-5">
                        <Col>
                            <Button>Добавить задачу</Button>
                        </Col>
                        <Col xs={2}>
                            <Form>
                                <Form.Control size="sm" type="text" placeholder="Поиск"/>
                            </Form>
                        </Col>
                        <Col>
                            <div>Всего - 4</div>
                        </Col>
                        <Col>
                            <div>Новых - 1</div>
                        </Col>
                        <Col>
                            <div>В работе - 1</div>
                        </Col>
                        <Col>
                            <div>Заверешено - 2</div>
                        </Col>
                        <Col xs={12}>
                            <Table responsive bordered hover className="mt-3">
                                <thead>
                                <tr>
                                    <th>Описание</th>
                                    <th>Статус</th>
                                    <th>Приоритет</th>
                                    <th>Плановая дата окончания</th>
                                    <th>Фактическая дата окончания</th>
                                    <th>Действие</th>
                                </tr>
                                </thead>
                                <tbody>
                                <TaskList />
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </TaskContextProvider>
        )
    }

}

export default App