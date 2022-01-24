import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { LinkNav } from "./LinkNav";
import { SectionNav } from "./SectionNav";

export function SidebarNav() {
    return (
        <Stack spacing='12' align='flex-start'>
            <SectionNav title="GERAL">
                <LinkNav icon={RiDashboardLine} href="/dashboard">Dashboard</LinkNav>
                <LinkNav icon={RiContactsLine} href="/users">Usuarios</LinkNav>
            </SectionNav>

            <SectionNav title="AUTOMAÇÃO">
                <LinkNav icon={RiInputMethodLine} href="/forms">Formulários</LinkNav>
                <LinkNav icon={RiGitMergeLine} href="/automation">Automação</LinkNav>
            </SectionNav>
        </Stack>
    );
}