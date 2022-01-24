import { Box, Stack } from "@chakra-ui/react";
import { Item } from "./Item";

export function Pagination() {
    return (
        <Stack direction={['column', 'row']} mt='8' justify='space-between' align='center' spacing='6'>
            <Box>
                <strong>0</strong> - <strong>5</strong> de <strong>100</strong>
            </Box>

            <Stack direction='row' spacing='2'>
                <Item isCurrent number={1} />
                <Item number={2} />
                <Item number={2} />
                <Item number={4} />
                <Item number={5} />
            </Stack>
        </Stack>
    );
}