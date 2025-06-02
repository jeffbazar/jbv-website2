import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns
from matplotlib.colors import LinearSegmentedColormap

# Create a more visually appealing executive summary visualization
plt.figure(figsize=(12, 6))

# Define categories and scores
categories = ['Enterprise Security', 'Ease of Setup', 'Customization', 'Cost Efficiency', 'Compliance Features']
simplai_scores = [9, 8, 4, 3, 9]
opensource_scores = [4, 3, 9, 8, 4]

# Create a DataFrame for easier plotting
df = pd.DataFrame({
    'Category': categories * 2,
    'Score': simplai_scores + opensource_scores,
    'Solution': ['SimplAI'] * 5 + ['Open-Source'] * 5
})

# Create a grouped bar chart
sns.set_style("whitegrid")
ax = sns.barplot(x='Category', y='Score', hue='Solution', data=df, palette=['#4472C4', '#70AD47'])

# Customize the chart
plt.title('SimplAI vs Open-Source: Key Attributes Comparison', fontsize=16, fontweight='bold')
plt.xlabel('')
plt.ylabel('Score (0-10)', fontsize=12)
plt.ylim(0, 10)
plt.legend(title='')
plt.xticks(rotation=15, ha='right')

# Add value labels on top of bars
for i, p in enumerate(ax.patches):
    ax.annotate(f'{p.get_height():.0f}', 
                (p.get_x() + p.get_width() / 2., p.get_height()), 
                ha = 'center', va = 'bottom', fontsize=10, fontweight='bold')

# Save the figure
plt.tight_layout()
plt.savefig('/home/ubuntu/visualizations/executive_summary_chart.png', dpi=300, bbox_inches='tight')
plt.close()

print("Executive summary chart created successfully!")
