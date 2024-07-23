export default function Tabs({ children, buttons, buttonsContainer = "menu" }) {
    const Buttonscontaier = buttonsContainer;
    return (
        <>
            <Buttonscontaier >
                { buttons }
            </Buttonscontaier>
            { children }
        </>
    )
}