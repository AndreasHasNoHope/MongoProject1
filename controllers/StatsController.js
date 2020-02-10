const dashboardStats = async (req, res) => {
    const categories = await Category.find({}).exec();
    const labels = [];
    const counts = [];
    for (let cat of categories) {
        const num = await Product.count({category: cat._id});
        counts.push(num);
        labels.push(cat.title);
    }

    res.json({
        success: true,
        data: {
            labels: labels,
            datasets: [
                {
                    label: "My Categories dataset",
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        }
    });
};






module.exports = dashboardStats;