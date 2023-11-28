import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Button, Card, IconButton, Text, TextInput } from 'react-native-paper'

export default function Lista_Tarefas() {

    const [tarefas, setTarefas] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [editando, setEditando] = useState(false)
    const [tarefaSendoEditada, setTarefaSendoEditada] = useState(null)
    const [tarefasConcluidas, setTarefasConcluidas] = useState([])

    function adicionarTarefa() {
        if (inputValue != '') {
            setTarefas([...tarefas, inputValue])
            setTarefaSendoEditada(null)
            setInputValue('')
        } else {
            console.warn('Digite algum valor')
        }
    }

    function editarTarefa() {

        let index = tarefas.indexOf(tarefaSendoEditada)
        let novaLista = tarefas

        novaLista.splice(index, 1, inputValue)

        setTarefas(novaLista)
        setEditando(false)
        setInputValue('')
    }

    function excluirTarefa(tarefa) {
        let novaListaTarefas = tarefas.filter(item => item !== tarefa)
        setTarefas(novaListaTarefas)
    }

    function handleEditarTarefa(tarefa) {
        setTarefaSendoEditada(tarefa)
        setInputValue(tarefa)
        setEditando(true)
    }

    function handleConcluirTarefa(tarefa) {
        let novaListaTarefas = tarefas.filter(item => item !== tarefa)
        setTarefas(novaListaTarefas)
        setTarefasConcluidas([...tarefasConcluidas, tarefa])
    }

    function handleButton() {
        if (editando) {
            editarTarefa()
        } else {
            adicionarTarefa()
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.inputContainer}>

                <TextInput
                    style={{ flex: 4 }}
                    mode='outlined'
                    label='Tarefa'
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                />

                <Button
                    style={styles.button}
                    mode='contained'
                    onPress={handleButton}
                >
                    {editando ? 'Edit' : 'Add'}
                </Button>

            </View>

            <FlatList
                style={styles.list}
                data={tarefas}
                renderItem={({ item }) => (
                    <Card
                        style={styles.card}
                        mode='outlined'
                    >
                        <Card.Content style={styles.cardContent}>
                            <Text variant='titleMedium' style={{ flex: 1 }}>{item}</Text>
                            <IconButton icon='check-bold' size={30} onPress={() => {
                                handleConcluirTarefa(item)
                            }} />
                            <IconButton icon='lead-pencil' size={30} onPress={() => {
                                handleEditarTarefa(item)
                            }} />
                            <IconButton icon='delete-forever' size={30} onPress={() => {
                                excluirTarefa(item)
                            }} />
                        </Card.Content>
                    </Card>
                )}
            />
                <Text>Tarefas concluídas</Text>
                <FlatList
                style={styles.list}
                data={tarefasConcluidas}
                renderItem={({ item }) => (
                    <Card
                        style={styles.card_concluido}
                        mode='outlined'
                    >
                        <Card.Content style={styles.cardContent}>
                            <Text variant='titleMedium' style={{ flex: 1 }}>{item}</Text>
                        </Card.Content>
                    </Card>
                )}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        flexDirection: 'row',
        width: '95%',
        paddingTop: 10,
        gap: 5
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ffd3b6",
        textColor: '#000'
    },
    list: {
        width: '95%',
        marginTop: 10
    },
    card: {
        margin: 5,
    },
    card_concluido: {
        margin: 5,
        backgroundColor: '#baffc9'
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})