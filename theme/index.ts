import { extendTheme } from '@chakra-ui/react';

// Global style overrides
import styles from './styles';

// Font overrides.
import fonts from './fonts';

// Color overrides.
import colors from './colors';

// Component style overrides.
import Section from './components/section';
import Button from './components/button';
import Link from './components/link';
import Text from './components/text';
import Heading from './components/heading';

const overrides = {
    colors,
    styles,
    fonts,
    components: {
        Section,
        Button,
        Link,
        Text,
        Heading
    }
};

export default extendTheme(overrides);