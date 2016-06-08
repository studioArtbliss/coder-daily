import React from 'react';
import ListItem from 'material-ui/List/ListItem';
import Card from 'material-ui/Card/Card';
import UpArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import DownArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import { grey400 } from 'material-ui/styles/colors';

function getUpButon({ link, onVoteUp }) {
    const upLink = link.votingDisabled
        ? (
            <UpArrow
                style={{
                    width: 50,
                    height: 50,
                }}
                color={grey400}
            />
        )
        : (
            <a
                href="#"
                onClick={
                    (e) => {
                        e.preventDefault();
                        onVoteUp({ link });
                    }
            }>
                <UpArrow
                    style={{
                        width: 50,
                        height: 50,
                    }}
                />
            </a>
        );

    return upLink;
}

function getDownButton({ link, onVoteDown }) {
    const downLink = link.votingDisabled
        ? (
            <DownArrow
                style={{
                    width: 50,
                    height: 50,
                }}
                color={grey400}
            />
        )
        : (
            <a
                href="#"
                onClick={
                    (e) => {
                        e.preventDefault();
                        onVoteDown({ link });
                    }
            }>
                <DownArrow
                    style={{
                        width: 50,
                        height: 50,
                    }}
                />
            </a>
        );

    return downLink;
}


const Link = ({ link, onVoteUp, onVoteDown }) => {
    return (
        <Card
            key={link.id}
            style={{
                marginBottom: 10,
                padding: 10,
            }}
        >
            <div
                style={{
                    display: 'flex',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >

                    {getUpButon({ link, onVoteUp })}

                    <div
                        style={{
                            fontSize: 17,
                            textAlign: 'center',
                        }}
                    >
                    {link.voteCount}
                    </div>

                    {getDownButton({ link, onVoteDown })}

                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <ListItem
                        primaryText={link.url}
                        secondaryText={link.description}
                    />
                </div>
            </div>
        </Card>
    );
};

Link.propTypes = {
    link: React.PropTypes.shape({
        url: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        voteCount: React.PropTypes.number.isRequired,
    }).isRequired,
    onVoteUp: React.PropTypes.func.isRequired,
    onVoteDown: React.PropTypes.func.isRequired,
};

export default Link;