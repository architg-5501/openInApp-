import React, { useState, useEffect } from 'react';
import Cardpage from './Cardpage';
import PlotChart from './PlotChart';
import AnalyticsCard from './AnalyticsCard';
import Buttoncomp from './Buttoncomp';
import BottomNavBar from './BottomNavbar';
import {
    Image,
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    TouchableOpacity,
    Linking,
} from 'react-native';
import Socialcomp from './Socialcomp';

const Homepage = () => {
    const [data, setdata] = useState(null);
    const [RecentLinks, setLinks] = useState([]);
    const [TopLinks, setTopLinks] = useState([]);
    const [urlLinks, seturl] = useState({});
    const [total_clicks, setclicks] = useState("");
    const [top_location, setlocation] = useState("");
    const [top_source, setsource] = useState("");
    const [selectedTab, setSelectedTab] = useState('Top_Links');
    const [support_whatsapp_number, setNumber] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU5MjcsImlhdCI6MTY3NDU1MDQ1MH0.dCkW0ox8tbjJA2GgUx2UEwNlbTZ7Rr38PVFJevYcXFI';
                const response = await fetch('https://api.inopenapp.com/api/v1/dashboardNew', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                const rJson = await response.json();
                setdata(rJson);
                setLinks(rJson.data.recent_links);
                setTopLinks(rJson.data.top_links);
                seturl(rJson.data.overall_url_chart);
                setclicks(rJson.total_clicks);
                setlocation(rJson.top_location);
                setsource(rJson.top_source);
                setNumber(rJson.support_whatsapp_number);
                // console.log(rJson.support_whatsapp_number);
                console.log(rJson.data.overall_url_chart);

            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [])

    const [showAllCards, setShowAllCards] = useState(false);

    const handleButtonClick = () => {

        setShowAllCards(!showAllCards);
    };

    const renderCards = (links) => {
        return links.map((linkObject, index) => (
            <Cardpage
                key={index}
                original_image={linkObject.original_image}
                times_ago={linkObject.times_ago}
                link={linkObject.web_link}
                title={linkObject.title}
                total_clicks={linkObject.total_clicks}
                created_at={linkObject.created_at.slice(0, 10)}
                web_link={linkObject.web_link}
                app={linkObject.app}
            />
        ));
    };
    return (
        <View style={{ flex: 1, backgroundColor: '#0E6FFF' }}>
            <View
                style={{
                    flexDirection: 'column',

                    padding: 16,
                    backgroundColor: 'white',
                    alignItems: 'start',
                    borderTopRightRadius: 24,
                    borderTopLeftRadius: 24,
                    marginTop: 6,
                    backgroundColor: 'rgb(245,245,245)'
                }}
            >

                {urlLinks && <PlotChart datas={urlLinks} />}
                <View style={{ height: 15 }} />
                <AnalyticsCard top_location={top_location} total_clicks={total_clicks} top_source={top_source} />
                <View style={{ height: 15 }} />
                <Buttoncomp backColor="white" backtext="📈  View Analytics" />
                <View style={{ height: 15 }} />

                <View >
                    <View >
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: 8
                        }}>
                            <View>
                                <Text
                                    style={{
                                        color: selectedTab === 'Top_Links' ? 'white' : 'black',
                                        backgroundColor: selectedTab === 'Top_Links' ? '#76b1e8' : 'rgb(245,245,245)',
                                        fontSize: 16,
                                        borderWidth: selectedTab === 'Top_Links' ? 2 : 0,
                                        borderRadius: 30,
                                        borderColor: '#76b1e8',
                                        padding: 4,
                                        fontFamily: 'bold',
                                    }}
                                    onPress={() => setSelectedTab('Top_Links')}
                                >
                                    Top Links
                                </Text>
                            </View>
                            <View style={{}}>
                                <Text
                                    style={{
                                        color: selectedTab === 'Recent_Links' ? 'white' : 'black',
                                        backgroundColor: selectedTab === 'Recent_Links' ? '#76b1e8' : 'rgb(245,245,245)',
                                        fontSize: 16,
                                        borderWidth: selectedTab === 'Recent_Links' ? 2 : 0,
                                        borderRadius: 30,
                                        borderColor: '#76b1e8',
                                        padding: 4,
                                        fontFamily: 'bold',

                                    }}
                                    onPress={() => setSelectedTab('Recent_Links')}
                                >
                                    Recent Links
                                </Text>
                            </View>
                            <View >
                                <Image
                                    style={{ resizeMode: 'contain', height: 30, width: 60 }}
                                    source={{ uri: 'https://cdn-icons-png.freepik.com/256/14025/14025191.png?ga=GA1.1.1068248021.1715681487&semt=ais_hybrid' }}
                                />
                            </View>
                        </View>
                        <View style={{ height: 15 }} />
                        {/* card */}
                        <View style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 8,
                        }}>
                            {selectedTab === 'Recent_Links' ? (
                                showAllCards ? renderCards(RecentLinks) : renderCards(RecentLinks.slice(0, 4))
                            ) : (
                                showAllCards ? renderCards(TopLinks) : renderCards(TopLinks.slice(0, 4))
                            )}
                        </View>
                    </View>

                </View>
                <View style={{ height: 15 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ width: '100%', borderWidth: 1, borderRadius: 10, backgroundColor: 'white' }}>
                        <TouchableOpacity onPress={handleButtonClick}  >
                            <Text style={{ fontSize: 16, fontWeight: 'bold', fontFamily: 'Roboto', color: 'black', textAlign: 'center', marginVertical: 10 }}>{`${showAllCards ? '📥  Hide' : '🔗  View All'} Links`}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: 15 }} />
                <Socialcomp backcolor="rgba(0,255,0,0.3)" backtext="Talk to Us" backlink="https://cdn-icons-png.freepik.com/256/13670/13670447.png?ga=GA1.1.1068248021.1715681487&semt=ais_hybrid" support_whatsapp_number={support_whatsapp_number} />
                <View style={{ height: 10 }} />
                <Socialcomp backcolor="rgba(0,0,255,0.5)" backtext="Frequently Ask Questions" backlink="https://cdn-icons-png.freepik.com/256/189/189665.png?ga=GA1.1.1068248021.1715681487&semt=ais_hybrid" />
                <View style={{ height: 15 }} />
            </View>
            <BottomNavBar />
        </View>


    );
};



export default Homepage;
