import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

const CrewmateDetail = () => {
    const { id } = useParams(); // Get crewmate ID from URL
    const [crewmate, setCrewmate] = useState(null); // State to store crewmate data
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchCrewmate = async () => {
            try {
                const { data, error } = await supabase
                    .from('Posts')
                    .select('*')
                    .eq('id', id)
                    .single();
                
                if (error) {
                    console.error("Error fetching crewmate details:", error);
                } else {
                    setCrewmate(data);
                }
            } catch (error) {
                console.error("Unexpected error fetching crewmate details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCrewmate();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!crewmate) return <p>No crewmate details found.</p>;

    return (
        <div>
            <h1>Here are details about the crewmate.</h1>
            <h2>Name of the crewmate: {crewmate.crewName}</h2>
            <p>Color: {crewmate.color}</p>
        </div>
    );
};

export default CrewmateDetail;