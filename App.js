import React from 'react';
import { View, Text, SectionList, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';

const BASE_URL = "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us";

const getImageUrl = (num) => `${BASE_URL}/SV3pt5_EN_${num}-2x.png`;

const datasource = [
    {
        title: "Electric",
        data: [
            { name: "Pikachu", number: 25 },
            { name: "Voltorb", number: 100 },
        ],
    },
    {
        title: "Fire",
        data: [
            { name: "Charmander", number: 4 },
            { name: "Growlithe", number: 58 },
        ],
    },
];

const renderItem = ({ item }) => {

    const imageUrl = getImageUrl(item.number);

    return (
        <TouchableOpacity style={styles.cardRow}>
            <Text style={styles.cardName}>{item.name}</Text>
            <Image
                source={{ uri: imageUrl }}
                style={styles.cardImage}
                resizeMode="contain"
            />
        </TouchableOpacity>
    );
};


export default function App() {
    return (
        <View style={{ marginTop: 40 }}>
            <Button title="ADD POKEMON" onPress={() => console.log("Adding Pokemon")} />

            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section }) => {
                    let bgColor = '#ddd';
                    let icon = '';

                    if (section.title === 'Electric') {
                        bgColor = '#f7e55e';
                        icon = '⚡';
                    } else if (section.title === 'Fire') {
                        bgColor = '#f59b9b';
                        icon = '🔥';
                    }

                    return (
                        <View style={[styles.headerContainer, { backgroundColor: bgColor }]}>
                            <Text style={styles.headerText}>{icon} {section.title.toUpperCase()}</Text>
                        </View>
                    );
                }}
                contentContainerStyle={{ paddingBottom: 40 }}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    cardRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#d4c9e7',
        backgroundColor: '#f2eef9',
        padding: 12,
        marginHorizontal: 10,
        marginVertical: 6,
        borderRadius: 10,
    },

    cardName: {
        fontSize: 20,
        fontWeight: '700',
        flex: 1,
        paddingLeft: 6,
    },

    cardImage: {
        width: 160,
        height: 240,
        marginLeft: 10,
        borderRadius: 6,
    },

    headerContainer: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginTop: 10,
    },

    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },

});
