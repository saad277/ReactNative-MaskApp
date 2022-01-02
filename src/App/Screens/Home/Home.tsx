import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';

import {Card} from '../../Components/Card';
import {Header} from '../../Components/Header';
import {OverlayLoader} from '../../Components/OverlayLoader';
import {getListing} from '../../Store/actions';
import {APP_ROUTES} from '../../Helpers/RouteHelpers';

interface listItem {
  item: object;
  index: number;
}

interface HomeProps {
  getListing: Function;
  fetching: boolean;
  list: [];
  navigation: {
    navigate: Function;
  };
}

const Home: React.FC<HomeProps> = (props) => {
  const {getListing, fetching, list, navigation} = props;

  useEffect(() => {
    getListing();
  }, []);

  const renderList = ({item, index}: listItem) => {
    return (
      <Card
        key={index}
        {...item}
        onPress={() => navigation.navigate(APP_ROUTES.MEDIA_DETAILS, item)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Home" />
      {fetching && <OverlayLoader />}
      <FlatList
        data={list}
        renderItem={renderList}
        numColumns={2}
        key={2}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
});

const mapStateToProps = (state: any) => {
  return {
    fetching: state.media.fetching,
    list: state.media.list,
  };
};

const mapDispatchToProps = {
  getListing,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
