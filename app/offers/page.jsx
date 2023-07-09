import Feed from "@/components/Feed"
import { data } from "@/data/data"

const offersPage  = () => {

    
    return( 
        <>
            <Search />
                <p className='desc text-center'>
                Fem Barri es la aplicacio...
                </p>
            <Feed 
                title={'Hello'}
                data={data} 
                ObjectComponent={offer} 
            />
        </>
    )
}