import React, {useState} from 'react';
import {FlatList} from 'react-native';

import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator"
import Screen from "../components/Screen";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";

const initialMessages = [
    {
        id:1,
        title:'Message Title 1',
        subtitle:'Description 1',
        image:require('../assets/blank.png')
    },
    {
        id:2,
        title:'Message Title 2',
        subtitle:'Description 2',
        image:require('../assets/blank.png')
    }
]

function MessagesScreen(){
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = message => {
        //delete msg from messages array
        const newMessages = messages.filter(m => m.id !== message.id)
        setMessages(newMessages)
        //call the server to delete from backend as well
    }

    return (
        <Screen style={{backgroundColor:"white"}}>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subtitle={item.subtitle}
                        image={item.image}
                        onPress={()=>console.log("message selected", item)}
                        renderRightActions={ () =>
                            <ListItemDeleteAction
                                onPress={()=>handleDelete(item)}
                        /> }
                        showChevrons={true}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={ () => {
                    setMessages([
                        {
                            id:2,
                            title:'Message Title 2',
                            subtitle:'Description 2',
                            image:require('../assets/blank.png')
                        }
                    ])
                }}
            />
        </Screen>
    )
}

export default MessagesScreen;